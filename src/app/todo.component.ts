import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
@Component({
  selector: 'todo',
  template: `
    <li>{{todo.title}}</li>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo:any;
}