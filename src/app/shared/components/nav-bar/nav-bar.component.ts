import { Component, HostListener } from '@angular/core';
import { NavBarService } from '../../services/navBar.service';
import { ScrollService } from '../../services/scroll.service';
import { ActivateLinkColorService } from '../../services/activateLinkColor.service';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(
    public navBarService: NavBarService,
    private activeLinkService: ActivateLinkColorService,
    private scrollService: ScrollService
  ) { }


  ngOnInit(): void {
    this.activeLinkService.setCurrentSection();
  }

  offNavMenu(): void {
    this.navBarService.navBarIsActive = !this.navBarService.navBarIsActive;
  }


  offOpacity(): void {
    this.navBarService.opacity = !this.navBarService.opacity;
  }


  // esconder el menu y la opacidad
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.navBarService.navBarIsActive) {
      return;
    }
    const targetElement = event.target as HTMLElement;
    if (targetElement.closest('.menu-opacity')) {
      this.navBarService.navBarIsActive = false;
      this.navBarService.opacity = false;
    }
  }


  scrollTo(id: string): void {
    this.scrollService.scrollToElement(id);
  }




  // identificadores

  get getActiveLink(): number {
    return this.activeLinkService.activeLink;
  }


  //activar color del link al dar click
  setHomeLink() {
    this.activeLinkService.setHomeLink();
    console.log(this.getActiveLink)
  }
  setAboutLink() {
    this.activeLinkService.setAboutLink();
    console.log(this.getActiveLink)
  }
  setServiceLink() {
    this.activeLinkService.setServiceLink();
    console.log(this.getActiveLink)
  }
  setPoyectLink() {
    this.activeLinkService.setProyectLink();
    console.log(this.getActiveLink)
  }
}
