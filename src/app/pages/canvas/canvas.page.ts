import { Platform } from '@ionic/angular';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.page.html',
  styleUrls: ['./canvas.page.scss'],
})
export class CanvasPage implements OnInit, AfterViewInit {
  // @ViewChild('canvas') canvasEl : ElementRef;
  @ViewChild('canvas', {static: false}) canvas: any;
  canvasElm: any;
  drawing = false;
  saveX: number;
  saveY: number

  selectedColor = '#9e2956';
  colors = [ '#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];
  lineWidth = 5;
  
  private _CANVAS  : any;
  private _CONTEXT : any;

  constructor(
    private platform: Platform,
    // public renderer: Renderer
  ) { }

  ngAfterViewInit() {
    this.canvasElm = this.canvas.nativeElement;
    this.canvasElm.width = this.platform.width() + '';
    this.canvasElm.height = 200;

    // this.renderer.setElementAttribute(this.canvasElm, 'width', this.platform.width() + '');
    // this.renderer.setElementAttribute(this.canvasElm, 'height', this.platform.height() + '');
  }

  ngOnInit() {
    // const canvas = document.getElementById('canvas');
    // const ctx = canvas.getContext('2d');

    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 150, 100);
    this.do();
  }

  do() {
    let ctx = this.canvasElm.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
  }

  moved(ev) {
    if(!!this.drawing) return;
    console.log('move: ', ev);
  }


  ionViewDidLoad(): void {
    // this._CANVAS 	    = this.canvasEl.nativeElement;
    // this._CANVAS.width  	= 500;
    // this._CANVAS.height 	= 500;

    // this.initialiseCanvas();
    // this.drawCircle();
  }

  initialiseCanvas(): void { if(this._CANVAS.getContext) { this.setupCanvas(); } }
  setupCanvas(): void {
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    this._CONTEXT.fillRect(0, 0, 500, 500);
  }
  clearCanvas(): void {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }
  drawCircle() : void {
    this.clearCanvas();
    this._CONTEXT.beginPath();

    // x, y, radius, startAngle, endAngle
    this._CONTEXT.arc(this._CANVAS.width/2, this._CANVAS.height/2, 80, 0, 2 * Math.PI);      
    this._CONTEXT.lineWidth   = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
   }

  drawSquare(): void {
    this.clearCanvas();
    this._CONTEXT.beginPath();
    this._CONTEXT.rect(this._CANVAS.width/2 - 100, this._CANVAS.height/2 - 100, 200, 200);
    this._CONTEXT.lineWidth   = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
  }

  drawTriangle() : void {
    this.clearCanvas();
    this._CONTEXT.beginPath();
    this._CONTEXT.moveTo(this._CANVAS.width/2 - 100, this._CANVAS.height/2 + 100);
    this._CONTEXT.lineTo(this._CANVAS.width/2 + 100, this._CANVAS.height/2 + 100);
    this._CONTEXT.lineTo(this._CANVAS.width/2, this._CANVAS.height/2);
    this._CONTEXT.lineTo(this._CANVAS.width/2 -100, this._CANVAS.height/2 + 100);
    this._CONTEXT.lineWidth   = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
  }

  startDrawing(ev) {
    this.drawing = true;
    var canvasPosition = this.canvasElm.getBoundingClientRect();
 
    this.saveX = ev.pageX - canvasPosition.x;
    this.saveY = ev.pageY - canvasPosition.y;
  }
 
  endDrawing() {
    this.drawing = false;
  }
 
  selectColor(color) {
    this.selectedColor = color;
  }
 
  setBackground() {
    var background = new Image();
    background.src = './assets/code.png';
    let ctx = this.canvasElm.getContext('2d');
 
    background.onload = () => {
      ctx.drawImage(background,0,0, this.canvasElm.width, this.canvasElm.height);   
    }
  }
}
