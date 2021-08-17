/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : PostgreSQL
 Source Server Version : 130002
 Source Host           : localhost:5432
 Source Catalog        : akademik
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 130002
 File Encoding         : 65001

 Date: 18/08/2021 05:03:19
*/


-- ----------------------------
-- Table structure for classes
-- ----------------------------
DROP TABLE IF EXISTS "public"."classes";
CREATE TABLE "public"."classes" (
  "id" int4 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "major_id" int4,
  "study_program_id" int4
)
;
ALTER TABLE "public"."classes" OWNER TO "postgres";

-- ----------------------------
-- Table structure for curriculums
-- ----------------------------
DROP TABLE IF EXISTS "public"."curriculums";
CREATE TABLE "public"."curriculums" (
  "id" int4 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "year" varchar(255) COLLATE "pg_catalog"."default",
  "publish_date" date,
  "approving_party" varchar(255) COLLATE "pg_catalog"."default",
  "approving_date" date,
  "ideal_study_period" varchar(255) COLLATE "pg_catalog"."default",
  "maximum_study_period" varchar(255) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "minimal_score" int4,
  "maximum_d_score" int4,
  "study_program_id" int4
)
;
ALTER TABLE "public"."curriculums" OWNER TO "postgres";

-- ----------------------------
-- Table structure for hours
-- ----------------------------
DROP TABLE IF EXISTS "public"."hours";
CREATE TABLE "public"."hours" (
  "id" int4 NOT NULL,
  "order" int4,
  "start" time(6),
  "end" time(6)
)
;
ALTER TABLE "public"."hours" OWNER TO "postgres";

-- ----------------------------
-- Table structure for lecturers
-- ----------------------------
DROP TABLE IF EXISTS "public"."lecturers";
CREATE TABLE "public"."lecturers" (
  "id" int4 NOT NULL,
  "nip" varchar(255) COLLATE "pg_catalog"."default",
  "nidn" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "front_degree" varchar(255) COLLATE "pg_catalog"."default",
  "back_degree" varchar(255) COLLATE "pg_catalog"."default",
  "id_number" varchar(255) COLLATE "pg_catalog"."default",
  "birth_date" date,
  "birth_city" varchar(255) COLLATE "pg_catalog"."default",
  "birth_country" varchar(255) COLLATE "pg_catalog"."default",
  "gender" varchar(255) COLLATE "pg_catalog"."default",
  "religion" varchar(255) COLLATE "pg_catalog"."default",
  "blood_type" varchar(255) COLLATE "pg_catalog"."default",
  "married_status" varchar(255) COLLATE "pg_catalog"."default",
  "home_address" varchar(255) COLLATE "pg_catalog"."default",
  "city" varchar(255) COLLATE "pg_catalog"."default",
  "country" varchar(255) COLLATE "pg_catalog"."default",
  "postal_code" varchar(255) COLLATE "pg_catalog"."default",
  "home_phone" varchar(255) COLLATE "pg_catalog"."default",
  "office_phone" varchar(255) COLLATE "pg_catalog"."default",
  "cellular_phone" varchar(255) COLLATE "pg_catalog"."default",
  "fax" varchar(255) COLLATE "pg_catalog"."default",
  "type" varchar(255) COLLATE "pg_catalog"."default",
  "status" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."lecturers" OWNER TO "postgres";

-- ----------------------------
-- Table structure for majors
-- ----------------------------
DROP TABLE IF EXISTS "public"."majors";
CREATE TABLE "public"."majors" (
  "id" int4 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."majors" OWNER TO "postgres";

-- ----------------------------
-- Table structure for rooms
-- ----------------------------
DROP TABLE IF EXISTS "public"."rooms";
CREATE TABLE "public"."rooms" (
  "id" int4 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "code" varchar(255) COLLATE "pg_catalog"."default",
  "capacity" varchar(255) COLLATE "pg_catalog"."default",
  "type" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."rooms" OWNER TO "postgres";

-- ----------------------------
-- Table structure for schedules
-- ----------------------------
DROP TABLE IF EXISTS "public"."schedules";
CREATE TABLE "public"."schedules" (
  "id" int4 NOT NULL,
  "subject_id" int4,
  "class_id" int4,
  "hour_id" int4,
  "day" int4,
  "lecturer_id" int4
)
;
ALTER TABLE "public"."schedules" OWNER TO "postgres";

-- ----------------------------
-- Table structure for semesters
-- ----------------------------
DROP TABLE IF EXISTS "public"."semesters";
CREATE TABLE "public"."semesters" (
  "id" int4 NOT NULL,
  "year" int4,
  "type" varchar(255) COLLATE "pg_catalog"."default",
  "start_date" date,
  "end_date" date,
  "start_input_period" date,
  "end_input_period" date
)
;
ALTER TABLE "public"."semesters" OWNER TO "postgres";

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS "public"."students";
CREATE TABLE "public"."students" (
  "id" int4 NOT NULL,
  "nim" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "gender" varchar(255) COLLATE "pg_catalog"."default",
  "birth_city" varchar(255) COLLATE "pg_catalog"."default",
  "birth_place" varchar(255) COLLATE "pg_catalog"."default",
  "birth_date" date,
  "religion" varchar(255) COLLATE "pg_catalog"."default",
  "origin_address" varchar(255) COLLATE "pg_catalog"."default",
  "recent_address" varchar(255) COLLATE "pg_catalog"."default",
  "city" varchar(255) COLLATE "pg_catalog"."default",
  "postal_code" varchar(255) COLLATE "pg_catalog"."default",
  "phone_number" varchar(255) COLLATE "pg_catalog"."default",
  "cellular_number" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "photo" bytea,
  "generation" int2,
  "registration_number" int4,
  "registration_date" date,
  "university_status" varchar(255) COLLATE "pg_catalog"."default",
  "student_status" varchar(255) COLLATE "pg_catalog"."default",
  "father_name" varchar(255) COLLATE "pg_catalog"."default",
  "father_birth_date" date,
  "father_status" varchar(255) COLLATE "pg_catalog"."default",
  "father_death_date" date,
  "father_education" varchar(255) COLLATE "pg_catalog"."default",
  "father_recent_education" varchar(255) COLLATE "pg_catalog"."default",
  "father_occupation" varchar(255) COLLATE "pg_catalog"."default",
  "mother_name" varchar(255) COLLATE "pg_catalog"."default",
  "mother_birth_date" date,
  "mother_status" varchar(255) COLLATE "pg_catalog"."default",
  "mother_death_date" date,
  "mother_education" varchar(255) COLLATE "pg_catalog"."default",
  "mother_recent_education" varchar(255) COLLATE "pg_catalog"."default",
  "mother_occupation" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_name" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_birth_date" date,
  "trustee_status" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_death_date" date,
  "trustee_address" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_city" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_phone" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_email" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_education" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_recent_education" varchar(255) COLLATE "pg_catalog"."default",
  "trustee_occupation" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."students" OWNER TO "postgres";

-- ----------------------------
-- Table structure for study_programs
-- ----------------------------
DROP TABLE IF EXISTS "public"."study_programs";
CREATE TABLE "public"."study_programs" (
  "id" int4 NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "major_id" int4
)
;
ALTER TABLE "public"."study_programs" OWNER TO "postgres";

-- ----------------------------
-- Table structure for subjects
-- ----------------------------
DROP TABLE IF EXISTS "public"."subjects";
CREATE TABLE "public"."subjects" (
  "id" int4 NOT NULL,
  "code" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "stheory" int4,
  "spractice" int4,
  "spractice_field" int4,
  "stotal" int4,
  "total_hours" varchar(255) COLLATE "pg_catalog"."default",
  "type" varchar(255) COLLATE "pg_catalog"."default",
  "minimum_pass_score" varchar(255) COLLATE "pg_catalog"."default",
  "semester" int4,
  "subject_trait" varchar(255) COLLATE "pg_catalog"."default",
  "study_plan" varchar(255) COLLATE "pg_catalog"."default",
  "study_matter" varchar(255) COLLATE "pg_catalog"."default",
  "study_note" varchar(255) COLLATE "pg_catalog"."default",
  "abstract" varchar(255) COLLATE "pg_catalog"."default",
  "syllabus_file" varchar(255) COLLATE "pg_catalog"."default",
  "major_id" int4,
  "study_program_id" int4
)
;
ALTER TABLE "public"."subjects" OWNER TO "postgres";

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int4 NOT NULL,
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "student_id" int4,
  "lecturer_id" int4
)
;
ALTER TABLE "public"."users" OWNER TO "postgres";

-- ----------------------------
-- Primary Key structure for table classes
-- ----------------------------
ALTER TABLE "public"."classes" ADD CONSTRAINT "classes_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table curriculums
-- ----------------------------
ALTER TABLE "public"."curriculums" ADD CONSTRAINT "curriculum_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table hours
-- ----------------------------
ALTER TABLE "public"."hours" ADD CONSTRAINT "hours_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table lecturers
-- ----------------------------
ALTER TABLE "public"."lecturers" ADD CONSTRAINT "lecturers_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table majors
-- ----------------------------
ALTER TABLE "public"."majors" ADD CONSTRAINT "majors_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table rooms
-- ----------------------------
ALTER TABLE "public"."rooms" ADD CONSTRAINT "rooms_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table schedules
-- ----------------------------
ALTER TABLE "public"."schedules" ADD CONSTRAINT "schedules_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table semesters
-- ----------------------------
ALTER TABLE "public"."semesters" ADD CONSTRAINT "semesters_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table students
-- ----------------------------
ALTER TABLE "public"."students" ADD CONSTRAINT "Test_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table study_programs
-- ----------------------------
ALTER TABLE "public"."study_programs" ADD CONSTRAINT "study_programs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table subjects
-- ----------------------------
ALTER TABLE "public"."subjects" ADD CONSTRAINT "subjects_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table classes
-- ----------------------------
ALTER TABLE "public"."classes" ADD CONSTRAINT "fk_class_major" FOREIGN KEY ("major_id") REFERENCES "public"."majors" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."classes" ADD CONSTRAINT "fk_class_study_program" FOREIGN KEY ("study_program_id") REFERENCES "public"."study_programs" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table curriculums
-- ----------------------------
ALTER TABLE "public"."curriculums" ADD CONSTRAINT "fk_curriculum_study_program" FOREIGN KEY ("study_program_id") REFERENCES "public"."study_programs" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table schedules
-- ----------------------------
ALTER TABLE "public"."schedules" ADD CONSTRAINT "fk_schedule_class" FOREIGN KEY ("class_id") REFERENCES "public"."classes" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."schedules" ADD CONSTRAINT "fk_schedule_hour" FOREIGN KEY ("hour_id") REFERENCES "public"."hours" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."schedules" ADD CONSTRAINT "fk_schedule_lecturer" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."schedules" ADD CONSTRAINT "fk_schedule_subject" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table study_programs
-- ----------------------------
ALTER TABLE "public"."study_programs" ADD CONSTRAINT "fk_study_program_major" FOREIGN KEY ("major_id") REFERENCES "public"."majors" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table subjects
-- ----------------------------
ALTER TABLE "public"."subjects" ADD CONSTRAINT "fk_subject_major" FOREIGN KEY ("major_id") REFERENCES "public"."majors" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."subjects" ADD CONSTRAINT "fk_subject_study_program" FOREIGN KEY ("study_program_id") REFERENCES "public"."study_programs" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "fk_user_lecturer" FOREIGN KEY ("lecturer_id") REFERENCES "public"."lecturers" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD CONSTRAINT "fk_user_student" FOREIGN KEY ("student_id") REFERENCES "public"."students" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
