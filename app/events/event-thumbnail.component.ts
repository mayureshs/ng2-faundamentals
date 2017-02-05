import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div>Time: {{event?.time}}</div>
      <div>Price: \${{event?.price}}</div>
      <div>
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">
          {{event?.location?.city}}, {{event?.location?.country}} 
        </span>
      </div>
      <div>
        Online URL:  {{event.onlineUrl}}
      </div>
      <button class="btn btn-primary hide" (click)="handleClickMe()">"Click Me</button> 
    </div>
    `,
  styles: [`
      .pad-left { margin-left: 10px; }
      .well div { color: #bbb }
      .thumbnail { min-height: 210px; }
    `]

})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;  //get input from parent
  @Output() eventClick = new EventEmitter();  //sent output to parent

  constructor() { }

  ngOnInit() { }

  //hidden functionality
  handleClickMe() {
    console.log('clicked from child thumbnail!');
    this.eventClick.emit(this.event.name);
  }

  //hidden functionality
  someProperty: any = "some value set in child";
  logFoo() {
    console.log('foo from child');
  }
}