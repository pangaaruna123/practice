import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-homepage',
  imports: [MatIconModule, MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Homepage {
  assetsData = [
    {
      assetId: 'J109129912',
      title: 'Expected Vs Actual Energy Generation',
      assetImei: 'Asset IMEI',
      discId: 'DISC2398',
      lastPing: '01/12/24, 10:30am'
    },
    {
      assetId: 'J109129912',
      title: 'Expected Vs Actual Energy Generation',
      assetImei: 'Asset IMEI',
      discId: 'DISC2398',
      lastPing: '01/12/24, 10:30am'
    },
    {
      assetId: 'J109129912',
      title: 'Expected Vs Actual Energy Generation',
      assetImei: 'Asset IMEI',
      discId: 'DISC2398',
      lastPing: '01/12/24, 10:30am'
    }
  ]

 
}
