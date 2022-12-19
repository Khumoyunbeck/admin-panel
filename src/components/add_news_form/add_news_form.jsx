import { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
// import CKEditor from "@ckeditor/ckeditor5-react"
// import parse from "html-react-parser"

function AddNewsForm() {
    const news_title_uz = useRef()
    const news_title_ru = useRef()
    const news_title_en = useRef()
    const news_body_uz = useRef()
    const news_body_ru = useRef()
    const news_body_en = useRef()
    const news_img = useRef()
    const news_date = useRef()
    return (
        <>
            <div class="content news_form">
                <div class="container-fluid">
                    <div class="page-title-box">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <h4>Yangi xabar qo'shish</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="mt-0 header-title">Yangi Xabar qo'shish</h4>
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        fetch('http://192.168.3.24:3001/news/add', {
                                            method: 'POST',
                                            headers: {
                                                'Accept': 'application/json',
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(
                                                {
                                                    img: news_img.current.value,
                                                    title_uz: news_title_uz.current.value,
                                                    body_uz: news_body_uz.current.getContent(),
                                                    title_ru: news_title_ru.current.value,
                                                    body_ru: news_body_ru.current.getContent(),
                                                    title_en: news_title_en.current.value,
                                                    body_en: news_body_en.current.getContent(),
                                                    date: news_date.current.value,
                                                }
                                            )
                                        }).then(function (res) { return res.json(); })
                                            .then(function (data) { console.log(data); })
                                        window.location = '/admin/yangilik'
                                    }}>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Xabar nomi o'zbek tilida</label>
                                            <div class="col-sm-10">
                                                <input ref={news_title_uz} class="form-control input_news_name_uz" type="text" name="title_uz" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Xabar nomi rus tilida</label>
                                            <div class="col-sm-10">
                                                <input ref={news_title_ru} class="form-control input_news_name_ru" type="text" name="title_ru" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Xabar nomi ingliz tilida</label>
                                            <div class="col-sm-10">
                                                <input ref={news_title_en} class="form-control input_news_name_en" type="text" name="title_en" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">To'liq matni o'zbek tilida</label>
                                            <div class="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => news_body_uz.current = editor}
                                                    initialValue={``}
                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image'
                                                        ],
                                                        toolbar: 'undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">To'liq matni rus tilida</label>
                                            <div class="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => news_body_ru.current = editor}
                                                    initialValue={``}
                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image | link'
                                                        ],
                                                        toolbar: 'undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">To'liq matni ingliz tilida</label>
                                            <div class="col-sm-10">
                                                <Editor
                                                    onInit={(evt, editor) => news_body_en.current = editor}
                                                    initialValue={``}
                                                    init={{
                                                        height: 500,
                                                        menubar: false,
                                                        plugins: [
                                                            'advlist autolink lists link image charmap print preview anchor',
                                                            'searchreplace visualblocks code fullscreen',
                                                            'insertdatetime media table paste code help wordcount image'
                                                        ],
                                                        toolbar: 'undo redo | formatselect | ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat | help | image | media | link',
                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Xabar surati</label>
                                            <div class="col-sm-10">
                                                <input ref={news_img} class="form-control Input_news_image" type="text" name="img" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Sana ni kiriting</label>
                                            <div class="col-sm-10">
                                                <input ref={news_date} class="form-control Input_news_date" type="text" name="img" />
                                            </div>
                                        </div>
                                        <a href="/api/news/all" class="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                        <button type="submit" class="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddNewsForm;
