import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {

    constructor() { }

    logsuccess(message: string, title?: string) {
        toastr.success(message, title)
    }

    loginfo(message: string, title?: string) {
        toastr.info(message, title)
    }

    logwarning(message: string, title?: string) {
        toastr.warning(message, title)
    }

    logerror(message: string, title?: string) {
        toastr.error(message, title)
    }

}