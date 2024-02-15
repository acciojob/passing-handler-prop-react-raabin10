import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: '' });

  const updateSelectionStyle = (nextBackground) => {
    setStyle(nextBackground);
  }

  return (
    <div className="fix-box" style={style} onClick={() => applyColor(updateSelectionStyle)}>
      Selection Box
    </div>
  );
}

export default Selection;

