import React from 'react'
import { useForm, Controller } from "react-hook-form"
import StarRating from "react-svg-star-rating"
import { navigate } from "gatsby"

import { ArrowLink, Flex,Container, Col } from "../../styles/globalStyles"
import { TopForm,PicTitle } from "../../styles/articleStyles"

const TopOfMind = ({ pageSections ,slug}) => {
  // if(pageSections){

  const { heading, quest1, quest2, ratingQues } = pageSections[0]
  // }

  // Initiate forms
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm()

  // Transforms the form data from the React Hook Form output to a format Netlify can read
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  // Handles the post process to Netlify so we can access their serverless functions
  const handlePost = (formData, event) => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "top-form", ...formData }),
    })
      .then((response) => {
        navigate(`/success/`)
        reset()
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    event.preventDefault()
  }

  return (
    <TopForm>
      <Flex alignTop spaceBetween column className="flex">
        <PicTitle pageTop>Top of Mind</PicTitle>

        <h1>{heading}</h1>
        <div className="form-inner">
          <form
            onSubmit={handleSubmit(handlePost)}
            name="top-form"
            method="POST"
            action="/success/"
            data-netlify="true"
            netlify-honeypot="got-ya"
          >
            <input type="hidden" name="form-name" value="top-form" />
            <input
              type="hidden"
              name="formId"
              value="top-form"
              {...register("formId")}
            />
            <h2>{quest1}</h2>

            {ratingQues.length >= 0 &&
              ratingQues.map((ques, index) => {
                let firstWord = ques.replace(/ .*/, "")

                return (
                  <label htmlFor={`rating${index + 1}`} key={index}>
                    <h3>{ques}</h3>
                    <Controller
                      key={firstWord}
                      name={`rating${index + 1} ${firstWord}`}
                      control={control}
                      // rules={{ required: true }}
                      render={({ field, field: { onChange, ref } }) => (
                        <StarRating
                          activeColor="#81b5a1"
                          hoverColor="#81b5a1"
                          containerClassName="starWrap"
                          handleOnClick={onChange}
                          starClassName="star"
                          inputRef={ref}
                          {...field}
                        />
                      )}
                    />
                  </label>
                )
              })}
            <br />
            <label htmlFor="Question2">
              <h2>{quest2}</h2>
              <textarea rows="5" name="Question2" {...register("Question2")} />
            </label>
            <label htmlFor="name">
              <h3>Name</h3>
              {errors.name && <p>We need your Name </p>}
              <input name="name" {...register("name")} />
            </label>
            <label htmlFor="email">
              <h3>Email</h3>
              {errors.email && <p>Please format email correctly</p>}
              <input
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                })}
              />
            </label>

            <label
              htmlFor="got-ya"
              style={{
                position: "absolute",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                padding: "0",
                border: "0",
              }}
            >
              Don’t fill this out if you're human:
              <input tabIndex="-1" name="got-ya" {...register("got-ya")} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Flex>
      {/* </Container> */}
    </TopForm>
  )
}

export default TopOfMind
