import * as THREE from 'three';
import Room from '../../Room.Class';
import Window from '../window/Window.class';
import Gate from './gate/Gate.class';




export default class Garage {
    garage: any = new THREE.Group();
    garageRoom: any = new Room(6, 3, 6, 100, 100).buildRoom();
    garageGate: any = new Gate().buildGate();
    window1: any = new Window(1.5, 1.5).buildWindow(-3, 0.4, 1);
    window2: any = new Window(1.5, 1.5).buildWindow(0.5, 0.4, -3);

    constructor() {
        this.garage.position.set(-6, 2, 0);
        this.window1.position.set(-3, 0.4, 1);
        this.window1.rotation.y = -Math.PI * 0.5;
        this.window2.position.set(0.5, 0.4, -3);
        this.window2.rotation.y = Math.PI;

        this.garage.add(
            this.garageRoom,
            this.garageGate,
            this.window1,
            this.window2
        )
    }

    buildGarage() {
        return this.garage;
    }

}