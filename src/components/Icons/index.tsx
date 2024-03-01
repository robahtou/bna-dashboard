export { default as ArrowRight } from './ArrowRight';
// import ArrowsMaximize from './ArrowsMaximize';
// import ArrowsMinimize from './ArrowsMinimize';
export { default as Bars } from './Bars';
export { default as BNALogo } from './BNALogo';
// import CircleInfo from './CircleInfo';
export { default as CirclePhone } from './CirclePhone';
export { default as CommunityCare } from './CommunityCare';
export { default as Envelope } from './Envelope';
export { default as Facebook } from './Facebook';
export { default as Instagram } from './Instagram';
// import LayerDouble from './LayerDouble';
export { default as LinkedIn } from './LinkedIn';
// import List from './List';
export { default as LocationDot } from './LocationDot';
export { default as LogoBNADark } from './LogoBNADark';
export { default as LogoBNALight } from './LogoBNALight';
// import LocationPerson from './LocationPerson';
// import Map from './Map';
export { default as ObjectsColumn } from './ObjectsColumn';
// import Print from './Print';
export {default as  School } from './School';
// import Search from './Search';
// import Spinner from './Spinner';
export{ default as Store } from './Store';
export { default as TrainSubway } from './TrainSubway';
export { default as Tree } from './Tree';
export { default as XTwitter } from './XTwitter';
export { default as  Xmark } from './Xmark';
export { default as Youtube } from './Youtube';


function Icons({ name, ...props }) {
  return (
    <svg {...props}>
      <use href={`#${name}`} />
    </svg>
  )
}


export default Icons;
// investigate if Next.js reloads the SVGs per page or are they cached?
