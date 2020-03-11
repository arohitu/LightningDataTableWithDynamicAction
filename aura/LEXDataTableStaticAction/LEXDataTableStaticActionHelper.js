({
    removeBook: function (cmp, row) {
        var rows = cmp.get('v.data');
        var rowIndex = rows.indexOf(row);
        rows.splice(rowIndex, 1);
        cmp.set('v.data', rows);
    },
    
    getRowActions : function (cmp, row, doneCallback) {
        var actions = [];
        var showdetailAction = {
            'label': 'Show Details',
            'iconName': 'utility:zoomin',
            'name': 'show_details'
        };
        actions.push(showdetailAction);
        var deleteAction = {
            'label': 'Delete',
            'iconName': 'utility:delete',
            'name': 'delete'
        };
        if (row['published'] !== 'Printed') {
            actions.push(deleteAction);
        } 
    }
})
