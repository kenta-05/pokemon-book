import { TypePaint } from './TypePaint';

export const Type = ({ type }) => {
  let typeName;
  switch (type.type.name) {
    case 'normal':
      typeName = <TypePaint color={'#729393'}>ノーマルタイプ</TypePaint>;
      break;
    case 'fire':
      typeName = <TypePaint color={'#ec2020'}>炎タイプ</TypePaint>;
      break;
    case 'water':
      typeName = <TypePaint color={'#00a6ff'}>水タイプ</TypePaint>;
      break;
    case 'electric':
      typeName = <TypePaint color={'#e8c900'}>電気タイプ</TypePaint>;
      break;
    case 'grass':
      typeName = <TypePaint color={'#3dc762'}>草タイプ</TypePaint>;
      break;
    case 'ice':
      typeName = <TypePaint color={'#00e9ab'}>氷タイプ</TypePaint>;
      break;
    case 'fighting':
      typeName = <TypePaint color={'#dd6f44'}>格闘タイプ</TypePaint>;
      break;
    case 'poison':
      typeName = <TypePaint color={'#b300ff'}>毒タイプ</TypePaint>;
      break;
    case 'ground':
      typeName = <TypePaint color={'#a45637'}>地面タイプ</TypePaint>;
      break;
    case 'flying':
      typeName = <TypePaint color={'#5ca1aa'}>飛行タイプ</TypePaint>;
      break;
    case 'psychic':
      typeName = <TypePaint color={'#bd18c0'}>エスパータイプ</TypePaint>;
      break;
    case 'bug':
      typeName = <TypePaint color={'#68d230'}>虫タイプ</TypePaint>;
      break;
    case 'rock':
      typeName = <TypePaint color={'#b36648'}>岩タイプ</TypePaint>;
      break;
    case 'ghost':
      typeName = <TypePaint color={'#7e21a9'}>ゴーストタイプ</TypePaint>;
      break;
    case 'dragon':
      typeName = <TypePaint color={'#8750ee'}>ドラゴンタイプ</TypePaint>;
      break;
    case 'dark':
      typeName = <TypePaint color={'#a27aac'}>悪タイプ</TypePaint>;
      break;
    case 'steel':
      typeName = <TypePaint color={'#85a492'}>鋼タイプ</TypePaint>;
      break;
    case 'fairy':
      typeName = <TypePaint color={'#f156f1'}>フェアリータイプ</TypePaint>;
      break;
    default:
      typeName = <TypePaint color={'#000000'}>不明なタイプ</TypePaint>;
      break;
  }
  return typeName;
};
