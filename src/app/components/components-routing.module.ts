import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentComponent } from './agent.component';
import { MemberComponent } from './member/member.component'
import { OwnerComponent } from './owner/owner.component'
const routes: Routes = [
  {
    // path: '',
    // component: AgentComponent,
    // data: {
    //   title: 'Dashboard'
    // }

    path: '',
    data: {
      title: 'Components'
    },
    children: [
      {
        path: 'agent',
        component: AgentComponent,
        data: {
          title: 'Agent'
        }
      },
      {
        path: 'member',
        component: MemberComponent,
        data: {
          title: 'Member'
        }
      },
      {
        path: 'owner',
        component: OwnerComponent,
        data: {
          title: 'Owner'
        }
      }
      
    ]
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
