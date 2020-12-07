import { Component } from '@angular/core'

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Post', text: 'Some text some text some text some text some text', id: 1},
    {title: 'Post2', text: 'Some text else some text some text some text some text', id: 2},
  ]

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }

  addPosts(post: Post) {
    this.posts.unshift(post)
  }
}
