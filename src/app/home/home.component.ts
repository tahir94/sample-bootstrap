import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title : any;
	prevTitle : any;
	constructor() {}

	ngOnInit() {
		$(document).ready(function(){
			var navItems = $('.admin-menu li > a');
			var navListItems = $('.admin-menu li');
			var allWells = $('.admin-content');
			var allWellsExceptFirst = $('.admin-content:not(:first)');
			
			allWellsExceptFirst.hide();
			navItems.click(function(e)
			{
				e.preventDefault();
				navListItems.removeClass('active');
				$(this).closest('li').addClass('active');
				
				allWells.hide();
				var target = $(this).attr('data-target-id');
				$('#' + target).show();
			});
		});



		// **************************************************
		
	}

	// 	$(document).ready(function() {
	// 		var sidebarMainMenu = $('#sidebar-menu .main-menu');
	// 		var staticContent = $('#static-content');
	// 		staticContent.find('h1').each(function() {
	// 			sidebarMainMenu.append('<li id="'+ $(this).attr('id') + '-menu"><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</li>');
	// 			this.title = sidebarMainMenu.find('#' + $(this).attr('id'));
	// 		});
	// 		staticContent.find('h2').each(function() {
	// 			this.prevTitle = sidebarMainMenu.find('#' + $(this).prevAll('h1').first().attr('id') + '-menu');
	// 			this.prevTitle.not(":has(ul)").append('<ul class="sub-menu"></ul>');
	// 			this.prevTitle.find('.sub-menu').append('<li id="'+ $(this).attr('id') + '-menu"><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</li>');
	// 		});
	// 		sidebarMainMenu.affix({
	// 			  offset: {
	// 				top: 0  // To Modify according to the height offset
	// 			  }
	// 		});
	// 	})
	// }

	




}
