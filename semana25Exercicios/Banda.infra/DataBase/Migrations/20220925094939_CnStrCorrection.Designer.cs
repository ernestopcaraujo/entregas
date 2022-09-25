﻿// <auto-generated />
using System;
using Banda.infra.DataBase;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Banda.infra.DataBase.Migrations
{
    [DbContext(typeof(GrupoDBContexto))]
    [Migration("20220925094939_CnStrCorrection")]
    partial class CnStrCorrection
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Banda.domain.Models.Grupo", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier")
                        .HasColumnName("ID");

                    b.Property<string>("Descricao")
                        .HasMaxLength(50)
                        .HasColumnType("VARCHAR(50)")
                        .HasColumnName("DESCRICAO");

                    b.Property<string>("NomeMusica")
                        .HasMaxLength(50)
                        .HasColumnType("VARCHAR(50)")
                        .HasColumnName("NOME");

                    b.Property<int>("SequenciaMusica")
                        .HasMaxLength(10)
                        .HasColumnType("INT")
                        .HasColumnName("SOBRENOME");

                    b.HasKey("Id")
                        .HasName("PK_GrupoID");

                    b.ToTable("GRUPO", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}
