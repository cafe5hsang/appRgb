import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

import { DevicesPage } from '../devices/devices';
import { Color } from '../../models/color';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  color: Color = new Color();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private bluetooth: BluetoothSerial
  ) {}

  // device list
  openDevicePage() {
    this.navCtrl.push(DevicesPage, {
      bluetooth: this.bluetooth
    });
  }

  // send color to device
  sendHexToDevice() {
    let hexStr : string = this.color.toString().replace("#", "");
    console.log(hexStr);
    if (this.bluetooth.isConnected()) {
      this.bluetooth.write(hexStr);
    } else {
      console.log('not connected');
    }
  }
}
