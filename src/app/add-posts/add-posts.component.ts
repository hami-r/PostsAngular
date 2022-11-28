import { Component } from '@angular/core';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent {
  
  userId = ""
  id = ""
  title = ""
  body = ""

  readValues = () => {
    let data:any = {
      "userId": this.userId,
      "id": this.id,
      "title": this.title,
      "body": this.body
    }

    console.log(data);
    
  }
}
