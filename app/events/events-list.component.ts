import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    // templateUrl: '/app/events/events-list.component.html'
    template: `
    <div>
    <h1>Upcoming ng Events</h1>
    <hr />
    <div class="row">
        <div *ngFor="let ngevent of events" class="col-md-5">
            <event-thumbnail #thumbnail (click)="handleThumbnailClick(ngevent.name)"
                [event]="ngevent"></event-thumbnail>    
        </div>
    </div>
    
    <h4 class="hide">{{thumbnail?.someProperty}}</h4>
    <button class="btn btn-primary hide" (click)="thumbnail.logFoo()">log some foo</button>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any;

    constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        // this.events = this.eventService.getEvents();
        //this.eventService.getEvents().subscribe(events => { this.events = events });
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastrService.logsuccess(eventName);
    }
}