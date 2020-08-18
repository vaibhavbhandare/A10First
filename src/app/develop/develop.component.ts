import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-develop',
  templateUrl: './develop.component.html',
  styleUrls: ['./develop.component.css']
})
export class DevelopComponent implements OnInit {

  public title = 'I Love To Develop';

  constructor() { }

  ngOnInit(): void {
    // this.postService.getPosts().subscribe(data => {
    //  console.log(data);
    // });
  }

}
