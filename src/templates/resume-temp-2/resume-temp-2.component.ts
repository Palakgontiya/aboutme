import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeApiService } from '../fake-api.service';

interface ActionBtnI {
  name: string;
  type: 'border' | 'flat' | 'solid';
  navigate_url?: string;
  modal_name?: string;
  action?: (type: string) => void;
}

interface HeaderI {
  action_btn: ActionBtnI[];
}

@Component({
  selector: 'app-resume-temp-2',
  standalone: true,
  templateUrl: './resume-temp-2.component.html',
  styleUrl: './resume-temp-2.component.scss',
})
export class ResumeTemp2Component implements OnInit {
  public header!: HeaderI;
  public modalToOpen!: string;

  constructor(private fakeApi: FakeApiService, private router: Router) {}

  ngOnInit(): void {
    this.fetchHeaderData();
  }

  fetchHeaderData() {
    this.fakeApi.getTemplateData().subscribe((data) => {
      const headerData = data.header;
      this.header = {
        ...headerData,
        action_btn: headerData.action_btn.map((btn) => ({
          ...btn,
          action: () => this.handleAction(btn),
        })),
      };
    });
  }

  handleAction(button: ActionBtnI) {
    if (button.navigate_url) {
      this.router.navigate([button.navigate_url]);
    } else if (button.modal_name) {
      this.openModal(button.modal_name);
    }
  }

  openModal(modalName: string) {
    this.modalToOpen = modalName;
    console.log(`Opening modal: ${modalName}`);
    // Implement modal logic here (e.g., call a modal service)
  }
}
