import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastOnline'
})
export class LastOnlinePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let lastOnlineStr = '';
    let lastOnline = <any>new Date(Date.now())-<any>new Date(value);
    if(lastOnline  > 86400e3){
      lastOnline = Math.floor(lastOnline / 86400e3);
      lastOnlineStr = 'Offline ' + lastOnline + ' day' + this.isPlural(lastOnline) + ' ago';
    }
    else if(lastOnline > 3600e3){
      lastOnline = Math.floor(lastOnline / 3600e3);
      lastOnlineStr = 'Offline ' + lastOnline + ' hour' + this.isPlural(lastOnline) + ' ago';
    }
    else if (lastOnline > 60e3) {
      lastOnline = Math.floor(lastOnline / 60e3);
      lastOnlineStr = 'Offline ' + lastOnline + ' min' + this.isPlural(lastOnline) + ' ago';
    }
    else {
      lastOnline = Math.floor(lastOnline / 1e3);
      lastOnlineStr = 'Offline ' + lastOnline + ' sec' + this.isPlural(lastOnline) + ' ago';
    }
    return lastOnlineStr;
  }

  isPlural(number){
    return number > 1 ? 's' : '';
  }

}
