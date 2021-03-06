import React from 'react/addons';

const EmptyBuildList = React.createClass({
  mixins: [React.PureRenderMixin],

  render() {
    return (
      <div className="empty-build-list">
        <p>Please select a job on the left hand side.</p>
      </div>
    );
  }
});

export default EmptyBuildList;
