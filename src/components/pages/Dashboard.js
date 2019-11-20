import React from 'react'
import * as test from '../../services/castelstoreService'
import MenuHeader from '../common/MenuHeader.js'
import UserApps from '../UserApps'
import { Divider, Responsive, Segment, Tab } from 'semantic-ui-react'
import StudentGeneralInfos from '../StudentGeneralInfos'
import TeacherStudentList from '../TeacherStudentList'
import StudentModules from '../StudentModules'
import Collapse from '../Collapse/Collapse'
import StudentItem from '../CollapseItems/StudentItem/StudentItem'
import Dashboard from '../Dashboard/Dashboard'


class DashboardPage extends React.Component {
  render() {
    return (
      <>
        {test.test()}
        <Dashboard />
      </>
    )
  }
}

export default DashboardPage
