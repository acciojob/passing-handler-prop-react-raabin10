import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { label, classname, background } = config;

  return (
    <button
      className={classname}
      data-testid={config.key} // Add this line to set data-testid
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
}

export default ColourSelector;

