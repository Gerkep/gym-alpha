package com.gymalpha.AlphaWebsite.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String country;
    private String mail;
    private String firstName;
    private String lastName;
    private String telephoneNumber;
    private String streetAndNumber;
    private String postalCode;
    private String city;
    private String items;

    public Order() {
    };

    public Order(String country, String mail, String firstName, String lastName, String telephoneNumber,
            String streetAndNumber, String postalCode, String city, String items) {
        this.city = city;
        this.country = country;
        this.mail = mail;
        this.firstName = firstName;
        this.lastName = lastName;
        this.telephoneNumber = telephoneNumber;
        this.streetAndNumber = streetAndNumber;
        this.postalCode = postalCode;
        this.items = items;
    };

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Order order = (Order) o;
        return Objects.equals(id, order.id) &&
                Objects.equals(firstName, order.firstName) &&
                Objects.equals(lastName, order.lastName) &&
                Objects.equals(telephoneNumber, order.telephoneNumber) &&
                Objects.equals(streetAndNumber, order.streetAndNumber) &&
                Objects.equals(postalCode, order.postalCode) &&
                Objects.equals(city, order.city) &&
                Objects.equals(country, order.country) &&
                Objects.equals(items, order.items) &&
                Objects.equals(mail, order.mail);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, country, mail, telephoneNumber, streetAndNumber, postalCode, city, items);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getStreetAndNumber() {
        return streetAndNumber;
    }

    public void setStreetAndNumber(String streetAndNumber) {
        this.streetAndNumber = streetAndNumber;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getItems() {
        return items;
    }

    public void setItems(String items) {
        this.items = items;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", country='" + country + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", streetAndNumber='" + streetAndNumber + '\'' +
                ", city='" + city + '\'' +
                ", telephoneNumber='" + telephoneNumber + '\'' +
                ", mail='" + mail + '\'' +
                ", items='" + items + '\'' +
                '}';
    }

}
