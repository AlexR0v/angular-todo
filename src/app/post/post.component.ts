import { Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import { Post } from '../app.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges {

  @Input('post') post!: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('infoEl', {static: true}) infoRef: ElementRef | undefined

  removePost() {
    this.onRemove.emit(this.post?.id)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit(): void {

  }

}
