import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ClubSkillTree from '/src/components/ClubSkillTree/ClubSkillTree';

import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType
} from 'beautiful-skill-tree'

export default function SkillTreePage() {
  return (
    <div>
      <Typography variant="h1" component="div" gutterBottom>
        Skill Tree
      </Typography>

      <Container maxWidth="xl">
        <ClubSkillTree />
      </Container>
    </div>
  );
}