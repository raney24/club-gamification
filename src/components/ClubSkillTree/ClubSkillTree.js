import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType
} from 'beautiful-skill-tree'

import { basics } from '/src/pages/skills'
import { pythonTree } from '/src/pages/hardcoded-tree'
import theme from '/src/components/theme'

export default function ClubSkillTree() {

  const data = useStaticQuery(graphql`
    query {
      allGoogleStudentProgressMasterSheet(
        limit: 100
        sort: {fields: code, order: DESC}
      ) {
        nodes {
          unit
          module
          level
          code
          necessary
          iCan
          description
        }
      }
    }
  `)

  let allModules = data.allGoogleStudentProgressMasterSheet.nodes;

  let pythonModules = allModules.filter(item => item.unit === 'Python Intermediate');
  let pythonSkillTree = []
  let pythonMaxLevel = pythonModules.length;

  // for (var i = 0; i < pythonMaxLevel; i++) {
  for (var i = 0; i < pythonMaxLevel; i++) {
    
    let item = pythonModules[i]
    if (item.necessary === false) {
      let nextItem = pythonModules[i+1]
      i++; // skip an iteration because we are adding two items to skill tree
      let description = `${item.description}
      ${item.iCan}`
      let nextItemDescription = `${nextItem.description}
      ${nextItem.iCan}`
      var skillItem = [
        {
          'id': item.code,
          'title': item.module,
          'tooltip': {
            content: description
          },
          'children': [],
        },
        {
          'id': nextItem.code,
          'title': nextItem.module,
          'tooltip': {
            content: nextItemDescription
          },
          'children': 
            pythonSkillTree,
        }
      ]
      pythonSkillTree = skillItem
    } else {
      if (i === 0) { // Only executed on first run
        let description = `${item.description} \n ${item.iCan}`
        var skillItem = {
          'id': item.code,
          'title': item.module,
          'tooltip': {
            content: [item.description, item.iCan]
          },
          'children': [],
        }
        pythonSkillTree.push(skillItem)
      } else {
        var skillItem = [
          {
            'id': item.code,
            'title': item.module,
            'tooltip': {
              content: [item.description, item.iCan]
            },
            'children': 
              pythonSkillTree
            ,
          }
        ]
        console.log("Skill item: ", skillItem);
        console.log("Pythonskilltree: ", pythonSkillTree);
        pythonSkillTree = skillItem
      }
    }
  }

  console.log("python skill tree");
  console.log(pythonSkillTree);

  return (
    <React.Fragment>
      <SkillProvider>
          <SkillTreeGroup theme={theme}>
            {() => {
              return (
                <>
                  <SkillTree
                    treeId="construct3basics"
                    title="Skill Tree"
                    description="First skill tree"
                    data={pythonSkillTree}
                  />
                </>
              )
              
            }}
          </SkillTreeGroup>
        </SkillProvider>
    </React.Fragment>
  )
}