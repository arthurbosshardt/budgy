import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.less']
})
export class HubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        let text = document.getElementById('text')
        let btn = document.getElementById('btn')
        let header = document.getElementById('header')
        let clouds = document.getElementById('clouds')
        let sun = document.getElementById('sun')
        let hills = document.getElementById('hills')
        let forest = document.getElementById('forest')
        let front = document.getElementById('front')

        window.addEventListener('scroll', function() {
          let value = window.scrollY;
          clouds.style.top = value * -1.5 + 'px';
          sun.style.top = value * -1.5 + 'px';
          btn.style.marginTop = value * 1.5 + 'px';
          header.style.top = value * 0.5 + 'px';
          forest.style.top = value * 0.5 + 'px';
        })
      });
    })(jQuery);
  }

}
