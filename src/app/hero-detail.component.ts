import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    constructor (
        private HeroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void{
        this.route.params   
            .switchMap((params: Params) =>
        this.HeroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void{
        this.location.back();
    }
    @Input()
    hero: Hero;
}