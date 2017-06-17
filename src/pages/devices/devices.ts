import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {
  bluetooth: BluetoothSerial;
  devices: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {}

  ionViewDidLoad() {
    this.bluetooth = this.navParams.get('bluetooth');
  }

  deviceSelected(device: any) {
    this.bluetooth.connect(device.id);
  }

  searchDevices() {
    this.bluetooth.list().then(data => {
      this.devices = data;
    }).catch(error => {
      console.log(error);
    });
  }

}
