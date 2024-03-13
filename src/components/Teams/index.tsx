import React from 'react';
import { Chart } from 'react-google-charts';
import styles from './index.module.scss';

const totalMembers = 14;
const memberSlice = 360 / totalMembers;
const coreMembers = 4;
const offsetAngle = -(coreMembers / 2) * memberSlice;

export const data = [
  ['TEAM', 'MEMBERS'],
  ['Andrei', 1],
  ['Liviu', 1],
  ['Vlad', 1],
  ['Vlad', 1],
  ['t', 1],
  ['t', 1],
  ['t', 1],
  ['t', 1],
  ['t', 1],
  ['t', 1],
  ['t', 1],
  ['Dorel', 1],
  ['Andrei', 1],
  ['Alfred', 1]
];

export const options = {
  width: 510,
  height: 510,
  backgroundColor: 'transparent',
  pieSliceText: 'label',
  pieStartAngle: offsetAngle,
  pieHole: 0.9,
  legend: {
    position: 'labeled'
  }
};

export const data2 = [
  ['TEAM', 'FAMILIES'],
  ['CORE TEAM', 4],
  ['TEAM MEMBERS', 7],
  ['ADVISORS', 3]
];

export const options2 = {
  width: 500,
  height: 500,
  pieHole: 0.4,
  is3D: false,
  pieSliceText: 'label',
  backgroundColor: 'transparent',
  pieStartAngle: offsetAngle,
  legend: 'none'
};
const images = [
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=',
  'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
];

const Teams = () => {
  return (
    <div style={{ position: 'relative', height: '625px' }}>
      <div id="teamMembers" style={{ width: '600px', height: '600px' }} className={styles.chart}>
        <Chart chartType="PieChart" data={data} options={options} />
      </div>
      <div
        id="teamFamilies"
        style={{ width: '500px', height: '500px' }}
        className={`${styles.chart} ${styles.centered}`}
        //
      >
        <Chart chartType="PieChart" data={data2} options={options2} />
      </div>
      <div>
        {images.map((img, i) => {
          return <img key={i} src={img} width={70} />;
        })}
      </div>
    </div>
  );
};

export default Teams;
