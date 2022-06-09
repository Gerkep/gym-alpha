package com.gymalpha.AlphaWebsite.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String material;
    private String type;
    private String description;
    private String price;
    private int XS;
    private int S;
    private int M;
    private int L;
    private int XL;

    public Product(Long id, String name, String material, String type, String description, String price, int xs, int s,
            int m, int l, int xl) {
        this.id = id;
        this.name = name;
        this.material = material;
        this.type = type;
        this.description = description;
        this.price = price;
        XS = xs;
        S = s;
        M = m;
        L = l;
        XL = xl;
    }
    public Product(){};
    public String getPrice() {
        return price;
    }
    public void setPrice(String price) {
        this.price = price;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getMaterial() {
        return material;
    }
    public void setMaterial(String material) {
        this.material = material;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public int getXS() {
        return XS;
    }
    public void setXS(int xS) {
        XS = xS;
    }
    public int getS() {
        return S;
    }
    public void setS(int s) {
        S = s;
    }
    public int getM() {
        return M;
    }
    public void setM(int m) {
        M = m;
    }
    public int getL() {
        return L;
    }
    public void setL(int l) {
        L = l;
    }
    public int getXL() {
        return XL;
    }
    public void setXL(int xL) {
        XL = xL;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + L;
        result = prime * result + M;
        result = prime * result + S;
        result = prime * result + XL;
        result = prime * result + XS;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((material == null) ? 0 : material.hashCode());
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        result = prime * result + ((type == null) ? 0 : type.hashCode());
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Product other = (Product) obj;
        if (L != other.L)
            return false;
        if (M != other.M)
            return false;
        if (S != other.S)
            return false;
        if (XL != other.XL)
            return false;
        if (XS != other.XS)
            return false;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        if (material == null) {
            if (other.material != null)
                return false;
        } else if (!material.equals(other.material))
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        if (type == null) {
            if (other.type != null)
                return false;
        } else if (!type.equals(other.type))
            return false;
        return true;
    }
    @Override
    public String toString() {
        return "Product [L=" + L + ", M=" + M + ", S=" + S + ", XL=" + XL + ", XS=" + XS + ", id=" + id + ", material="
                + material + ", name=" + name + ", type=" + type + "]";
    }
    
}
