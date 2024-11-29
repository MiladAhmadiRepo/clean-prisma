import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class ProductsService {
  constructor(private readonly databaaseService: DatabaseService) {
  }

  async create(createProductDto: Prisma.ProductCreateInput) {
    return this.databaaseService.product.create({
      data: createProductDto
    });
  }

  async findAll() {
    return this.databaaseService.product.findMany({});
  }

  async findOne(id: number) {
    return this.databaaseService.product.findUnique({
      where: { id },
      include: {
        description: true,
        tags: true,
        reviews: true
      }  ,
    });
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.databaaseService.product.update({
      where: { id },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    return this.databaaseService.product.delete({
      where: { id }
    });
  }
}
