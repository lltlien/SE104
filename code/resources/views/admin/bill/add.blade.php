@extends('admin.main')

@section('content')

<div class="m-3">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <div>
      <h3>Thông tin khách hàng 
      <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#chooseCustomerModal">Chọn khách hàng</button>
      </h3>
    <!-- Button trigger modal -->
    

    <!-- Modal -->
    <div class="modal fade" id="chooseCustomerModal" tabindex="-1" aria-labelledby="chooseCustomerModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="chooseCustomerModalLabel">Chọn khách hàng</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              id="choose-customer-close-modal"></button>
          </div>
          <div class="modal-body">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Tên khách hàng</th>
                  <th scope="col">SĐT</th>
                  <th scope="col">Email</th>
                  <th scope="col">Tổng nợ</th>
                </tr>
              </thead>
              <tbody id="customer-list">
                <!-- php code get customer-list -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <b>ID: </b><span id="customer-id"></span> <br />
    <b>Họ và tên: </b><span id="customer-name"></span> <br />
    <b>SĐT: </b><span id="customer-phone"></span> <br />
    <b>Email: </b><span id="customer-email"></span> <br>
    <b>Tổng nợ: </b><span id="customer-total-debt">0</span> VNĐ<br>
  </div>

    <br/>
    
    <!-- Button trigger modal -->
    <div>
      <div>
      <h3 class="d-flex justify-content-between">Hoá đơn
      <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addBookModal">(+) Thêm sách</button>
      </h3>
      
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addBookModal" tabindex="-1" aria-labelledby="addBookModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addBookModalLabel">Thêm Sách</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="buy-books">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tên sách</th>
                    <th scope="col">Tác giả</th>
                    <th scope="col">NXB</th>
                    <th scope="col">Giá bán</th>
                    <th scope="col">Còn lại</th>
                    <th scope="col">Số lượng mua</th>
                  </tr>
                </thead>
                <tbody id="book-list">
                  <!-- php code get book-list -->
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btn-close-add-book-modal">
                Đóng
              </button>
              <button type="button" class="btn btn-primary" id="btn-buy-books">Thêm</button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Modal -->
    </div>
    <div id="receipt">
      <div>
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên sách</th>
              <th scope="col">Tác giả</th>
              <th scope="col">Đơn giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thành tiền</th>
            </tr>
          </thead>
          <tbody id="receipt-book-list">
            <!-- php code receipt -->
          </tbody>
        </table>
      </div>
      <div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Số tiền</span>
          <input id="receipt-money-field" type="number" class="form-control" aria-label="money"
            aria-describedby="basic-addon1">
          <span class="input-group-text" id="basic-addon1">VNĐ</span>
        </div>
        <div class="d-flex justify-content-center">

          <button class="btn btn-success" type="submit" id="btn-create-receipt">Tạo hoá đơn</button>
        </div>
      </div>
    </div>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
      integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
      crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
      integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
      crossorigin="anonymous"></script>

    <script type="module" src="{{asset('/js/bill/index.js')}}"></script>
    <script type="module" src="{{asset('/js/bill/receipt.js')}}"></script>
    <script type="module" src="{{asset('/js/bill/customer.js')}}"></script>

</div>

@endsection