import { signal, Signal } from '@angular/core';
import { Building, ColoredGate, TimedGate } from '../buildings';
import { GameEventHandler, GameEventType } from '../game-events';
import { Tile } from '../map';
import { ColorUtils } from '../map/utils';
import { Road, Tube } from '../roads';
import { RandomUtils } from '../utils';
import { BasicRoad } from './../roads/basic-road.road';
import { Selection, ToolbarItem } from './models';

export class Toolbar {
   public static readonly INITIAL_SELECTED_ITEM_KEY = 1;

   private static readonly instance = signal<Toolbar | null>(null);

   public static inject(): Signal<Toolbar | null> {
      return this.instance.asReadonly();
   }

   private readonly gate1Color: string;
   private readonly gate2Color: string;

   public readonly items: ToolbarItem[] = [
      {
         displayName: 'Editor tool',
         selection: Selection.EDITOR_TOOL,
         factory: () => null,
         selectionMatchFn: () => false
      },
      {
         displayName: 'Road',
         selection: Selection.ROAD,
         factory: tile => new BasicRoad(tile),
         selectionMatchFn: obj => obj instanceof BasicRoad
      },
      {
         displayName: 'Tube',
         selection: Selection.TUBE,
         factory: tile => new Tube(tile),
         selectionMatchFn: obj => obj instanceof Tube
      },
      {
         displayName: 'Colored gate 1', // TODO
         selection: Selection.COLORED_GATE_1,
         factory: tile => new ColoredGate(tile, this.gate1Color),
         selectionMatchFn: obj => obj instanceof ColoredGate && obj.color === this.gate1Color
      },
      {
         displayName: 'Colored gate 2', // TODO
         selection: Selection.COLORED_GATE_2,
         factory: tile => new ColoredGate(tile, this.gate2Color),
         selectionMatchFn: obj => obj instanceof ColoredGate && obj.color === this.gate2Color
      },
      {
         displayName: 'Timed gate',
         selection: Selection.TIMED_GATE,
         factory: tile => new TimedGate(tile),
         selectionMatchFn: obj => obj instanceof TimedGate
      }
   ];

   private selectedToolbarItem!: ToolbarItem;

   constructor() {
      const possibleColors = ColorUtils.getGameObjectColors();
      this.gate1Color = RandomUtils.nextArrayElement(possibleColors);
      possibleColors.splice(possibleColors.indexOf(this.gate1Color));
      this.gate2Color = RandomUtils.nextArrayElement(possibleColors);

      GameEventHandler.getInstance().watchEvents(GameEventType.SELECT_TOOLBAR_ITEM, toolbarItemIndex => {
         this.selectedToolbarItem = this.items[toolbarItemIndex];
      });

      Toolbar.instance.set(this);
   }

   public createBuildingFromSelection(tile: Tile): Building | Road | null {
      return this.selectedToolbarItem.factory(tile);
   }

   public isAssociatedItemSelected(obj: Building | Road): boolean {
      return this.selectedToolbarItem.selectionMatchFn(obj);
   }

   public selectItemByKey(key: number): void {
      while (key < 0) {
         key += this.items.length;
      }
      while (key >= this.items.length) {
         key -= this.items.length;
      }

      GameEventHandler.getInstance().emitEvent(GameEventType.SELECT_TOOLBAR_ITEM, key);
   }

   public stepSelectedItem(amount: number): void {
      const currentItemIndex = this.items.indexOf(this.selectedToolbarItem);
      if (currentItemIndex === -1) {
         this.selectItemByKey(0);
         return;
      }

      this.selectItemByKey(currentItemIndex + amount);
   }

   public get selection(): Selection {
      return this.selectedToolbarItem.selection;
   }
}
