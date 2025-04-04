import parse from 'html-react-parser';

const SectionTitle = ({Title,SubTitle}) => {
    return (
        <div>
      <div className="sub-title"><span><img src='/assets/shark-fin.png' alt='' style={{width:"85%", filter:"brightness(0) invert(1)"}} /></span>{parse(SubTitle)}</div>
      <h2 className="sec-title">{parse(Title)}</h2>             
        </div>
    );
};

export default SectionTitle;