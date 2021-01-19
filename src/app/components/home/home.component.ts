import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'src', 'type'];
  data: any = null;

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.apiGet("/images/all").pipe(finalize(() => { })).subscribe(res => {
      this.data = res;
    });
  }

}
