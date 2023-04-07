import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>

            <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
                {/* <!-- Vertical Navbar --> */}
                <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                    <div class="container-fluid">
                        {/* <!-- Toggler --> */}
                        <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <!-- Brand --> */}
                        <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                            <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." />
                        </a>
                        {/* <!-- User menu (mobile) --> */}
                        <div class="navbar-user d-lg-none">
                            {/* <!-- Dropdown --> */}
                            <div class="dropdown">
                                {/* <!-- Toggle --> */}
                                <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div class="avatar-parent-child">
                                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle" />
                                        <span class="avatar-child avatar-badge bg-success"></span>
                                    </div>
                                </a>
                                {/* <!-- Menu --> */}
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                    <a href="#" class="dropdown-item">Profile</a>
                                    <a href="#" class="dropdown-item">Settings</a>
                                    <a href="#" class="dropdown-item">Billing</a>
                                    <hr class="dropdown-divider" />
                                    <a href="#" class="dropdown-item">Logout</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Collapse --> */}
                        <div class="collapse navbar-collapse" id="sidebarCollapse">
                            {/* <!-- Navigation --> */}
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="bi bi-house"></i> Dashboard
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/dashboard/customer">
                                        <a class="nav-link" href="#">
                                            <i class="bi bi-bar-chart"></i> Customers
                                        </a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="bi bi-chat"></i> Products
                                        <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                                    </a>
                                </li>

                            </ul>
                            {/* <!-- Divider --> */}
                            <hr class="navbar-divider my-5 opacity-20" />

                            <div class="mt-auto"></div>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="bi bi-person-square"></i> Account
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="bi bi-box-arrow-left"></i> Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="h-screen flex-grow-1 overflow-y-lg-auto">
                    <header class="bg-surface-primary border-bottom pt-6">
                    </header>
                    <main class="py-6 bg-surface-secondary">
                        <div class="container-fluid">
                            <div class="row g-6 mb-6">

                                <div class="col-xl-3 col-sm-6 col-12">
                                    <div class="card shadow border-0">
                                    </div>
                                </div>
                            </div>

                            {/* customer */}
                            <div class="card shadow border-0 mb-7">
                                <div class="card-header">
                                    <h5 class="mb-0">Product</h5>
                                </div>

                                <div class="container table-responsive py-5">
                                    <table class="table table-bordered table-hover">
                                    <thead class="thead">
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Category </th>
                                                <th scope="col">Brand </th>
                                                <th scope="col">Price </th>
                                                <th scope="col">Quantity </th>
                                                <th scope="col">Image </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>Otto</td>
                                                <td>Otto</td>
                                                <td>Otto</td>
                                                <td>Otto</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* customers */}
                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default Product
