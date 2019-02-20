import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { complete, edit, text, data } = this.props;

   /* const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }
*/
    console.log(this.props);
    return (
      <h1>{data.toString()}</h1>
    );
  }
}
