({
    init: function (cmp, event, helper) {
        var rowActions = helper.getRowActions.bind(this, cmp);
        cmp.set('v.columns', [
            { label: 'Name', fieldName: 'name', type: 'text' },
            { label: 'Author', fieldName: 'author', type: 'text' },
            { label: 'Publishing State', fieldName: 'published', type: 'text' },
            { label: 'Action', type: 'action', typeAttributes: { rowActions: rowActions } }
        ]);
        cmp.set('v.data', [
            { "name":"Adventures","author":"Rohit","published":"Printed"},
            { "name":"Travelogue","author":"John","published":"Draft"},
            { "name":"Food","author":"Simon","published":"In Review"},
            { "name":"History","author":"Thomas","published":"Printed"},
            { "name":"Adventures","author":"Jeni","published":"Draft"}
        ]);
    },

    handleRowAction: function (cmp, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');

        switch (action.name) {
            case 'show_details':
                alert('Showing Details: ' + JSON.stringify(row));
                break;
            case 'delete':
                helper.removeBook(cmp, row);
                break;
        }
    },
    handleHeaderAction : function (cmp, event, helper) {
        alert('Header');
    }
})
