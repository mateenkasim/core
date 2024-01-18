'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.propTypes = void 0;
var _propTypes = _interopRequireDefault(require('prop-types'));
var _constants = require('./utils/constants');
var RefComponent = _propTypes['default'].shape({
  current: _propTypes['default'].element
});
var StyledComponent = _propTypes['default'].shape({
  classes: _propTypes['default'].object,
  innerRef: RefComponent
});
var propTypes = {
  actions: _propTypes['default'].arrayOf(
    _propTypes['default'].oneOfType([
      _propTypes['default'].func,
      _propTypes['default'].shape({
        icon: _propTypes['default'].oneOfType([
          _propTypes['default'].element,
          _propTypes['default'].func,
          _propTypes['default'].string,
          RefComponent
        ]).isRequired,
        isFreeAction: _propTypes['default'].bool,
        position: _propTypes['default'].oneOf([
          'auto',
          'toolbar',
          'toolbarOnSelect',
          'row'
        ]),
        tooltip: _propTypes['default'].string,
        onClick: _propTypes['default'].func.isRequired,
        onMouseEnter: _propTypes['default'].func,
        onMouseLeave: _propTypes['default'].func,
        iconProps: _propTypes['default'].object,
        disabled: _propTypes['default'].bool,
        hidden: _propTypes['default'].bool
      }),
      _propTypes['default'].shape({
        action: _propTypes['default'].func,
        position: _propTypes['default'].oneOf([
          'auto',
          'toolbar',
          'toolbarOnSelect',
          'row'
        ])
      })
    ])
  ),
  renderSummaryRow: _propTypes['default'].func,
  columns: _propTypes['default'].arrayOf(
    _propTypes['default'].shape({
      cellStyle: _propTypes['default'].oneOfType([
        _propTypes['default'].object,
        _propTypes['default'].func
      ]),
      currencySetting: _propTypes['default'].shape({
        locale: _propTypes['default'].string,
        currencyCode: _propTypes['default'].string,
        minimumFractionDigits: _propTypes['default'].number,
        maximumFractionDigits: _propTypes['default'].number
      }),
      ariaLabel: _propTypes['default'].string,
      ariaSortAsc: _propTypes['default'].oneOf([
        'ascending',
        'descending',
        'none',
        'other'
      ]),
      ariaSortDesc: _propTypes['default'].oneOf([
        'ascending',
        'descending',
        'none',
        'other'
      ]),
      draggable: _propTypes['default'].bool,
      customFilterAndSearch: _propTypes['default'].func,
      customSort: _propTypes['default'].func,
      customExport: _propTypes['default'].func,
      defaultFilter: _propTypes['default'].any,
      defaultSort: _propTypes['default'].oneOf(['asc', 'desc']),
      editComponent: _propTypes['default'].oneOfType([
        _propTypes['default'].element,
        _propTypes['default'].func
      ]),
      emptyValue: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
        _propTypes['default'].func
      ]),
      export: _propTypes['default'].bool,
      field: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].arrayOf(_propTypes['default'].string)
      ]),
      filtering: _propTypes['default'].bool,
      filterCellStyle: _propTypes['default'].object,
      filterPlaceholder: _propTypes['default'].string,
      filterComponent: _propTypes['default'].oneOfType([
        _propTypes['default'].element,
        _propTypes['default'].func
      ]),
      grouping: _propTypes['default'].bool,
      headerStyle: _propTypes['default'].object,
      hidden: _propTypes['default'].bool,
      hideFilterIcon: _propTypes['default'].bool,
      initialEditValue: _propTypes['default'].any,
      lookup: _propTypes['default'].object,
      editable: _propTypes['default'].oneOfType([
        _propTypes['default'].func,
        _propTypes['default'].oneOf(['always', 'onUpdate', 'onAdd', 'never'])
      ]),
      removable: _propTypes['default'].bool,
      render: _propTypes['default'].func,
      searchable: _propTypes['default'].bool,
      sorting: _propTypes['default'].bool,
      title: _propTypes['default'].oneOfType([
        _propTypes['default'].element,
        _propTypes['default'].string
      ]),
      type: _propTypes['default'].oneOf([
        'string',
        'boolean',
        'numeric',
        'date',
        'datetime',
        'time',
        'currency'
      ])
    })
  ).isRequired,
  components: _propTypes['default'].shape({
    Action: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Actions: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Body: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Cell: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Container: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    EditField: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    EditRow: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    FilterRow: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Groupbar: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    GroupRow: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Header: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    OverlayLoading: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    OverlayError: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Pagination: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Row: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ]),
    Toolbar: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      StyledComponent
    ])
  }),
  data: _propTypes['default'].oneOfType([
    _propTypes['default'].arrayOf(_propTypes['default'].object),
    _propTypes['default'].func
  ]).isRequired,
  editable: _propTypes['default'].shape({
    isEditable: _propTypes['default'].func,
    isBulkEditable: _propTypes['default'].func,
    isDeletable: _propTypes['default'].func,
    onRowAdd: _propTypes['default'].func,
    onRowUpdate: _propTypes['default'].func,
    onRowDelete: _propTypes['default'].func,
    onRowAddCancelled: _propTypes['default'].func,
    onRowUpdateCancelled: _propTypes['default'].func,
    isEditHidden: _propTypes['default'].func,
    isDeleteHidden: _propTypes['default'].func
  }),
  detailPanel: _propTypes['default'].oneOfType([
    _propTypes['default'].func,
    _propTypes['default'].arrayOf(
      _propTypes['default'].oneOfType([
        _propTypes['default'].func,
        _propTypes['default'].shape({
          disabled: _propTypes['default'].bool,
          icon: _propTypes['default'].oneOfType([
            _propTypes['default'].element,
            _propTypes['default'].func,
            _propTypes['default'].string,
            RefComponent
          ]),
          openIcon: _propTypes['default'].oneOfType([
            _propTypes['default'].element,
            _propTypes['default'].func,
            _propTypes['default'].string,
            RefComponent
          ]),
          tooltip: _propTypes['default'].string,
          render: _propTypes['default'].func.isRequired
        })
      ])
    )
  ]),
  icons: _propTypes['default'].shape({
    Add: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    Check: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    Clear: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    Delete: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    DetailPanel: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    Edit: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    Export: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    Filter: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    FirstPage: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    LastPage: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    NextPage: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    PreviousPage: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    Refresh: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    ResetSearch: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    Search: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    SortArrow: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    ThirdStateCheck: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ]),
    ViewColumn: _propTypes['default'].oneOfType([
      _propTypes['default'].element,
      _propTypes['default'].func,
      RefComponent
    ])
  }),
  isLoading: _propTypes['default'].bool,
  title: _propTypes['default'].oneOfType([
    _propTypes['default'].element,
    _propTypes['default'].string
  ]),
  options: _propTypes['default'].shape({
    actionsCellStyle: _propTypes['default'].object,
    editCellStyle: _propTypes['default'].object,
    idSynonym: _propTypes['default'].string,
    detailPanelColumnStyle: _propTypes['default'].object,
    actionsColumnIndex: _propTypes['default'].number,
    addRowPosition: _propTypes['default'].oneOf(['first', 'last']),
    columnsButton: _propTypes['default'].bool,
    defaultExpanded: _propTypes['default'].oneOfType([
      _propTypes['default'].bool,
      _propTypes['default'].func
    ]),
    debounceInterval: _propTypes['default'].number,
    detailPanelType: _propTypes['default'].oneOf(['single', 'multiple']),
    doubleHorizontalScroll: _propTypes['default'].bool,
    emptyRowsWhenPaging: _propTypes['default'].bool,
    exportAllData: _propTypes['default'].bool,
    exportMenu: _propTypes['default'].arrayOf(
      _propTypes['default'].shape({
        label: _propTypes['default'].string,
        exportFunc: _propTypes['default'].func
      })
    ),
    filtering: _propTypes['default'].bool,
    filterCellStyle: _propTypes['default'].object,
    filterRowStyle: _propTypes['default'].object,
    header: _propTypes['default'].bool,
    headerSelectionProps: _propTypes['default'].object,
    headerStyle: _propTypes['default'].object,
    hideFilterIcons: _propTypes['default'].bool,
    initialPage: _propTypes['default'].number,
    maxBodyHeight: _propTypes['default'].oneOfType([
      _propTypes['default'].number,
      _propTypes['default'].string
    ]),
    minBodyHeight: _propTypes['default'].oneOfType([
      _propTypes['default'].number,
      _propTypes['default'].string
    ]),
    loadingType: _propTypes['default'].oneOf(['overlay', 'linear']),
    overflowY: _propTypes['default'].oneOf([
      'visible',
      'hidden',
      'scroll',
      'auto',
      'initial',
      'inherit',
      'overlay'
    ]),
    padding: _propTypes['default'].oneOf(['normal', 'dense']),
    paging: _propTypes['default'].bool,
    pageSize: _propTypes['default'].number,
    pageSizeOptions: _propTypes['default'].arrayOf(
      _propTypes['default'].number
    ),
    paginationType: _propTypes['default'].oneOf(['normal', 'stepped']),
    paginationPosition: _propTypes['default'].oneOf(['bottom', 'top', 'both']),
    persistentGroupingsId: _propTypes['default'].string,
    rowStyle: _propTypes['default'].oneOfType([
      _propTypes['default'].object,
      _propTypes['default'].func
    ]),
    search: _propTypes['default'].bool,
    searchText: _propTypes['default'].string,
    searchDebounceDelay: _propTypes['default'].number,
    toolbarButtonAlignment: _propTypes['default'].oneOf(['left', 'right']),
    searchFieldAlignment: _propTypes['default'].oneOf(['left', 'right']),
    searchFieldStyle: _propTypes['default'].object,
    searchAutoFocus: _propTypes['default'].bool,
    searchFieldVariant: _propTypes['default'].oneOf([
      'standard',
      'filled',
      'outlined'
    ]),
    selection: _propTypes['default'].bool,
    selectionProps: _propTypes['default'].oneOfType([
      _propTypes['default'].object,
      _propTypes['default'].func
    ]),
    showEmptyDataSourceMessage: _propTypes['default'].bool,
    showFirstLastPageButtons: _propTypes['default'].oneOfType([
      _propTypes['default'].object,
      _propTypes['default'].bool
    ]),
    showSelectAllCheckbox: _propTypes['default'].bool,
    showSelectGroupCheckbox: _propTypes['default'].bool,
    showTitle: _propTypes['default'].bool,
    showTextRowsSelected: _propTypes['default'].bool,
    sorting: _propTypes['default'].bool,
    // TODO: This will be removed eventually
    defaultOrderByCollection: _propTypes['default'].arrayOf(
      _propTypes['default'].shape({
        orderBy: _propTypes['default'].number,
        orderDirection: _propTypes['default'].string,
        sortOrder: _propTypes['default'].number,
        orderIndex: _propTypes['default'].number
      })
    ),
    maxColumnSort: _propTypes['default'].oneOf([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      _constants.ALL_COLUMNS
    ]),
    showColumnSortOrder: _propTypes['default'].bool,
    sortOrderIndicatorStyle: _propTypes['default'].object,
    keepSortDirectionOnColumnSwitch: _propTypes['default'].bool,
    clientSorting: _propTypes['default'].bool,
    toolbar: _propTypes['default'].bool,
    thirdSortClick: _propTypes['default'].bool,
    numberOfPagesAround: _propTypes['default'].oneOf([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
  }),
  localization: _propTypes['default'].shape({
    grouping: _propTypes['default'].shape({
      groupedBy: _propTypes['default'].string,
      placeholder: _propTypes['default'].string
    }),
    pagination: _propTypes['default'].object,
    toolbar: _propTypes['default'].object,
    header: _propTypes['default'].object,
    body: _propTypes['default'].object
  }),
  initialFormData: _propTypes['default'].object,
  onSearchChange: _propTypes['default'].func,
  onFilterChange: _propTypes['default'].func,
  onColumnDragged: _propTypes['default'].func,
  onColumnResized: _propTypes['default'].func,
  onGroupRemoved: _propTypes['default'].func,
  onGroupChange: _propTypes['default'].func,
  onSelectionChange: _propTypes['default'].func,
  onRowsPerPageChange: _propTypes['default'].func,
  onPageChange: _propTypes['default'].func,
  onChangeColumnHidden: _propTypes['default'].func,
  onOrderChange: _propTypes['default'].func,
  onOrderCollectionChange: _propTypes['default'].func,
  onRowClick: _propTypes['default'].func,
  onRowDoubleClick: _propTypes['default'].func,
  onTreeExpandChange: _propTypes['default'].func,
  onQueryChange: _propTypes['default'].func,
  onBulkEditOpen: _propTypes['default'].func,
  tableRef: _propTypes['default'].any,
  style: _propTypes['default'].object,
  page: _propTypes['default'].number,
  totalCount: _propTypes['default'].number
};
exports.propTypes = propTypes;
