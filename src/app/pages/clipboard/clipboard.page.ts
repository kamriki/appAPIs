import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {
  copyText: string = '';
  pasteText: string = '';

  constructor(
    public clipboard: Clipboard
  ) { }

  ngOnInit() {
  }

  CopyText() {
    this.clipboard.copy(this.copyText).then(()=> {
      alert("copy done")
    })
  }

  PasteText() {
    this.clipboard.paste().then((text)=> {
      this.pasteText = text;
      alert("paste done")
    })
  }

  ClearCopy() {
    this.clipboard.clear().then(() => {
      alert('copy cleared.');
    });
  }

}
