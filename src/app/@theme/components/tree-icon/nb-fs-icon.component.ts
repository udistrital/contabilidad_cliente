import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-nb-fs-icon',
    template: `
          <nb-icon nbTreeGridRowToggle
          *ngIf="isDir(); else fileIcon"
          [attr.aria-label]="expanded ? 'collapse' : 'expand'"
          [icon]="expanded ? 'folder-open' : 'folder'"
                  aria-hidden="true" pack="fas">
          </nb-icon>
  
      <ng-template #fileIcon>
        <nb-icon *ngIf="isDoc()"
          [icon]="'file-invoice-dollar'" aria-hidden="true" pack="fas" status="primary">
          </nb-icon>
      </ng-template>
      &nbsp;
    `,
  })
  export class FsIconAComponent {
    @Input() kind: string;
  
    @Input() expanded: boolean;
  
    isDir(): boolean {
      return this.kind === 'dir';
    }
  
    isDoc(): boolean {
      return this.kind === 'doc';
    }
  }
  