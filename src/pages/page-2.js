import * as React from "react"
import { Link } from "gatsby"

import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType
} from 'beautiful-skill-tree'

import { basics } from './skills'

import Layout from "../components/layout"
import Seo from "../components/seo"

function SecondPage() {
  console.log("Basics: ", basics);
  return (
    <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div>
      <SkillProvider>
        <SkillTreeGroup>
          {() => {
            return (
              <>
                <SkillTree
                  treeId="basics"
                  title="Skill Tree"
                  description="First skill tree"
                  data={basics}
                />
              </>
            )
            
          }}
          
          
        </SkillTreeGroup>
      </SkillProvider>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default SecondPage
