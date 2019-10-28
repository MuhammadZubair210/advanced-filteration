import React from 'react';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';

// import AddStorage from './AddStorage';
// import AddTag from './AddTag';
// import ChooseAMI from './ChooseAMI';
import ChooseInstanceType from './ChooseInstanceType';
// import ConfigureSecurityGroup from './ConfigureSecurityGroup';
import App from './App'

export default function DisplayAdvanced() {
  return (
    <Container maxWidth="lg">
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="AMI">
          <Typography>Choose AMI</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="Instance">
          <Typography>Choose Instance Type</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails  style={{display:"block"}}>
          <ChooseInstanceType />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      








      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="Security">
          <Typography>Configure Security Group</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <ConfigureSecurityGroup /> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="Storage">
          <Typography>Add Storage</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display:"block"}}>

          {/* <AddStorage /> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="Tags">
          <Typography>Add Tags</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <AddTag /> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Container>
  );
}
