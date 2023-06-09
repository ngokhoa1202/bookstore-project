$(document).ready(function () {
  // Initialize DataTables
  var table = $('#employee-table').DataTable({
    "language": {
      "lengthMenu": "Show _MENU_ entries",
      "zeroRecords": "No data available in table",
      "info": "Showing _START_ to _END_ of _TOTAL_ entries",
      "infoEmpty": "",
      "infoFiltered": "(filtered from _MAX_ total entries)",
      "paginate": {
        "previous": "<",
        "next": ">",
      },
    },
    "lengthMenu": [5, 10, 20, 50],
    "pageLength": 10,
    "columnDefs": [
      { "orderable": false, "targets": -1 }
      ]
  });
});
