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
        let btn = document.getElementById('btn')
        let header = document.getElementById('header')
        let clouds = document.getElementById('clouds')
        let sun = document.getElementById('sun')
        let hills = document.getElementById('hills')

        window.addEventListener('scroll', function() {
          let value = window.scrollY;
          clouds.style.top = value * -1.5 + 'px';
          sun.style.top = value * -1.5 + 'px';
          btn.style.marginTop = value * 0.7 + 'px';
          hills.style.top = value * -0.2 + 'px';
          header.style.top = value * -0.2 + 'px';
        })
      });
    })(jQuery);
  }

}
