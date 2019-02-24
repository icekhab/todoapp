import React, { Component } from 'react';
import './filter-panel.css';

class FilterPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionFilters: [
        {
          id: 1,
          name: 'All',
        },
        {
          id: 2,
          name: 'Active',
          filter: item => !item.done,
        },
        {
          id: 3,
          name: 'Done',
          filter: item => item.done,
        },
      ],
      selectedActionFilter: 0,
      searchStr: '',
    };
  }

  getFilterSearchByName() {
    const { searchStr } = this.state;
    const searchStrLower = searchStr.toLowerCase();
    return searchStr
      ? [
        ((item) => {
          const name = item.name.toLowerCase();
          return name.includes(searchStrLower);
        }),
      ]
      : [];
  }

  getActionFilter() {
    const { actionFilters, selectedActionFilter } = this.state;
    const { filter } = actionFilters[selectedActionFilter];
    return filter ? [filter] : [];
  }

  changeSearchStr(searchStr) {
    this.setState({
      searchStr,
    }, () => {
      this.changeFilter();
    });
  }

  changeActionFilter(selectedActionFilter) {
    this.setState({
      selectedActionFilter,
    }, () => {
      this.changeFilter();
    });
  }

  changeFilter() {
    const { onFilter } = this.props;

    const filterSearchByName = this.getFilterSearchByName();
    const actionFilter = this.getActionFilter();

    onFilter([
      ...(filterSearchByName),
      ...(actionFilter),
    ]);
  }

  render() {
    const { actionFilters, selectedActionFilter, searchStr } = this.state;
    return (
      <div className="filter-panel">
        <input
          className="filter-panel__search form-control"
          placeholder="Search todo"
          value={searchStr}
          onChange={e => this.changeSearchStr(e.target.value)}
        />
        {
          actionFilters.map((item, index) => {
            const className = `filter-panel__btn btn ${selectedActionFilter === index ? 'btn-info' : 'btn-outline-info'}`;
            return (
              <button
                key={item.id}
                type="button"
                className={className}
                onClick={() => this.changeActionFilter(index)}
              >
                {item.name}
              </button>
            );
          })
        }
      </div>
    );
  }
}

export default FilterPanel;
