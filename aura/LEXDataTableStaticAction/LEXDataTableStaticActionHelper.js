({
    removeBook: function (cmp, row) {
        var rows = cmp.get('v.data');
        var rowIndex = rows.indexOf(row);

        rows.splice(rowIndex, 1);
        cmp.set('v.data', rows);
    },
    
    getRowActions : function (cmp, row, doneCallback) {
        debugger;
        var actions = [{
            'label': 'Show Details',
            'iconName': 'utility:zoomin',
            'name': 'show_details'
        }];
        var deleteAction = {
            'label': 'Delete',
            'iconName': 'utility:delete',
            'name': 'delete'
        };
        if (row['published'] === 'Printed') {
            deleteAction['disabled'] = 'true';
        } 
        
        actions.push(deleteAction);
        // simulate a trip to the server
        setTimeout($A.getCallback(function () {
            doneCallback(actions);
        }), 200);
    }
})