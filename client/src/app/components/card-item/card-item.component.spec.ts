import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Compound } from 'src/app/types/compound';
import { CardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardItemComponent],
      imports: [RouterTestingModule, FontAwesomeModule],
    });

    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display compound name', () => {
    const testCompound: Compound = {
      id: 1,
      compoundName: 'Test Compound',
      compoundImage: 'test-image.jpg',
      compoundDescription: ''
    };

    component.compound = testCompound;
    fixture.detectChanges();

    const cardTitle = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(cardTitle.textContent).toContain(testCompound.compoundName);
  });

  it('should emit onDeleteCompound event when delete icon is clicked', () => {
    const testCompound: Compound = {
      id: 1,
      compoundName: 'Test Compound',
      compoundImage: 'test-image.jpg',
      compoundDescription: ''
    };

    component.compound = testCompound;
    fixture.detectChanges();

    let emittedCompound: Compound | undefined;
    component.onDeleteCompound.subscribe((compound) => (emittedCompound = compound));

    const deleteIcon = fixture.debugElement.query(By.css('.icon')).nativeElement;
    deleteIcon.click();

    expect(emittedCompound).toBe(testCompound);
  });

  it('should display compound image', () => {
    const testCompound: Compound = {
      id: 1,
      compoundName: 'Test Compound',
      compoundImage: 'test-image.jpg',
      compoundDescription: ''
    };

    component.compound = testCompound;
    fixture.detectChanges();

    const compoundImage = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(compoundImage.src).toContain(testCompound.compoundImage);
  });
});
